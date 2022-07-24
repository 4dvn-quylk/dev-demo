/* eslint-disable no-template-curly-in-string */
import { Logo } from '../logo';
import { Button, Form, Input, Layout, Row, Space, Typography } from 'antd';
import { useAppStore } from '../../stores';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { register, signIn } from '../../api';
import './index.css';

const { Header: AntHeader } = Layout;

export const Header = () => {
  const navigate = useNavigate();
  const [{ user, registered }, updateStore] = useAppStore();
  const [loading, setLoading] = useState(false);
  const onFinish = useCallback(
    async (values) => {
      try {
        setLoading(true);
        if (registered) {
          const result = await signIn(values);
          updateStore((draft) => {
            draft.user = result;
          });
        } else {
          const result = await register();
          updateStore((draft) => {
            draft.registered = result;
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [registered]
  );

  const handleLogOut = (values) => {
    updateStore((draft) => {
      draft.user = undefined;
    });
    navigate('');
  };

  const handleShare = () => {
    navigate('share');
  };

  return (
    <AntHeader data-testid="app-header" className="app-header">
      <Row justify="space-between" align="middle">
        <Space align="center">
          <Logo />
          <Typography.Title>Funny Movies</Typography.Title>
        </Space>

        <Space align="center" size={16}>
          {!user && (
            <Form onFinish={onFinish} autoComplete="off" layout="inline">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: '${label} is not a valid email!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  {registered ? 'Login' : 'Register'}
                </Button>
              </Form.Item>
            </Form>
          )}

          {!!user && (
            <>
              <Typography.Title level={5} strong>
                Welcome {user.email}
              </Typography.Title>
              <Button type="primary" ghost onClick={handleShare}>
                Share a movie
              </Button>
              <Button ghost onClick={handleLogOut} loading={loading}>
                Logout
              </Button>
            </>
          )}
        </Space>
      </Row>
    </AntHeader>
  );
};
