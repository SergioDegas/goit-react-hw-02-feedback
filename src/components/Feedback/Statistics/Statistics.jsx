import PropTypes from 'prop-types';

import { List } from '../FeedbackOptions/FeedbackOptions.styled';
import { Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <List>
        <li>
          Good:<Text>{good}</Text>
        </li>
        <li>
          {' '}
          Neutral: <Text> {neutral}</Text>
        </li>
        <li>
          Bad: <Text>{bad}</Text>
        </li>
      </List>
      <List>
        <li>
          {' '}
          Total: <Text>{total}</Text>
        </li>
        <li>
          Positive FeedBack: <Text> {percentage}</Text>%
        </li>
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
