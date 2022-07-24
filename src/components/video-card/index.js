import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import { memo } from 'react';
import './index.css';
const { Paragraph, Title, Text } = Typography;

export const VideoCard = memo(
  ({
    videoSrc,
    title,
    sharedUser,
    numberLikes,
    numberDislikes,
    description,
  }) => {
    return (
      <div className="c-video-card" data-testid="c-video-card">
        <Row gutter={[24, 12]}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <iframe
              src={videoSrc}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              height="400px"
              width="100%"
            />
          </Col>

          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Space direction="vertical">
              <Title level={3} data-testid="test-title">
                {title}
              </Title>
              <Space size={16}>
                {numberLikes ? (
                  <div data-testid="test-liked">
                    {numberLikes} <LikeOutlined />
                  </div>
                ) : null}

                {numberDislikes ? (
                  <div data-testid="test-disliked">
                    {numberDislikes} <DislikeOutlined />
                  </div>
                ) : null}
              </Space>
              
              {sharedUser ? (
                <Text data-testid="test-shared-user">
                  Shared by: {sharedUser}
                </Text>
              ) : null}

              <Text data-testid="test-description">Description</Text>
              <Paragraph
                data-testid="test-paragraph"
                ellipsis={{
                  rows: 4,
                  expandable: true,
                }}
                title={description}
              >
                {description}
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </div>
    );
  }
);
