import { Col, Row, Space, Typography } from 'antd';
import './index.css';
const { Paragraph, Title, Text } = Typography;

export const VideoCard = ({
  title,
  sharedUser,
  numberLikes,
  numberDislikes,
  description,
}) => {
  return (
    <div className="c-video-card">
      <Row gutter={[24, 12]}>
        <Col md={{ span: 12 }} sm={{ span: 24 }}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            height="400px"
            width="100%"
          />
        </Col>

        <Col md={{ span: 12 }} sm={{ span: 24 }}>
          <Space direction="vertical">
            <Title level={3}>{title}</Title>
            <Text>Shared by: {sharedUser}</Text>
            <Text>Description:</Text>
            <Paragraph
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
};
