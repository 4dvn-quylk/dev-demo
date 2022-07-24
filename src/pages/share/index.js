import { Button, Card, Form, Input, Row, Spin } from 'antd';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shareLink } from '../../api';
import { useAppStore } from '../../stores';

const SharePage = () => {
  const [{ listVideos }, updateStore] = useAppStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = useCallback(
    async (values) => {
      try {
        setLoading(true);
        await shareLink();
        updateStore((draft) => {
          // Fake API
          draft.listVideos.push({ ...listVideos[0], id: Date.now() });
        });
        navigate('/')
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Spin spinning={loading} tip="Loading...">
      <Row justify="center">
        <Card
          title="Share a Youtube video"
          style={{ width: 400 }}
          className="mt mb"
        >
          <Form
            onFinish={onFinish}
            autoComplete="off"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              name="url"
              label="Youtube URL"
              rules={[{ required: true, message: 'Please input url!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </Spin>
  );
};
export default SharePage;
