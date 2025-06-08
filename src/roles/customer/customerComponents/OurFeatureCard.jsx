import { Card, Typography } from 'antd';
import './OurFeatureCard.css';

const { Title, Paragraph } = Typography;

const OurFeatureCard = ({ featureIcon, featureName, featureDescription }) => {
  return (
    <div className="feature-card-wrapper">
      <Card className="feature-card">
        <div className="feature-card-content">
          {/* Icon Container */}
          <div className="feature-icon-container">
            <div className="feature-icon">
              {featureIcon}
            </div>
          </div>
          
          {/* Feature Name */}
          <Title level={4} className="feature-name">
            {featureName}
          </Title>
          
          {/* Feature Description */}
          <Paragraph className="feature-description">
            {featureDescription}
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default OurFeatureCard;