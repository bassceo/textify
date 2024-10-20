import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Button } from '@mui/material';
import './index.scss';

const daysFromDate = (date) => Math.round((Date.now() - new Date(date)) / 8.64e+7);

const ProjectCard = ({
  isRemoved = false,
  imageUrl,
  lastEntryTime = Date.now(),
  projectName = 'Unknown Project',
  onRestore = () => {},
  onClick = () => {},
}) => (
  <Card
    className="project-card"
    sx={{ boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.17)' }}
    onClick={!isRemoved ? onClick : undefined}
  >
    {isRemoved && (
      <Button
        className="project-card__restore-button"
        onClick={(e) => {
          e.stopPropagation();
          onRestore();
        }}
      >
        Восстановить
      </Button>
    )}
    <CardActionArea className="project-card__action" disabled={isRemoved}>
      <CardMedia
        component="img"
        className={`project-card__image ${isRemoved ? "project-card__image--removed" : ""}`}
        image={imageUrl}
        alt={projectName}
      />
      <CardContent className="project-card__content">
        <div className="project-card__name">{projectName}</div>
        <div className="project-card__last-entry">
          Последний вход - {daysFromDate(lastEntryTime)} дней назад
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
);

ProjectCard.propTypes = {
  isRemoved: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  lastEntryTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  projectName: PropTypes.string,
  onRestore: PropTypes.func,
  onClick: PropTypes.func,
};

export default ProjectCard;
