import { Box } from 'components/Box';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center">
      <p>{message}</p>
    </Box>
  );
};
Notification.protoType = {
    message: PropTypes.string.isRequired
};
export default Notification;
