import PropTypes from 'prop-types';

const HeaderClients = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

HeaderClients.propTypes = {
  title: PropTypes.string,
};

HeaderClients.defaultProps = {
  title: 'Без заголовка', // Значение по умолчанию, если title не передан
};

export default HeaderClients;
