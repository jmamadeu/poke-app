import ReactModal, { Props } from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const Modal: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div>
      <ReactModal style={customStyles} contentLabel="Example Modal" {...rest}>
        {children}
      </ReactModal>
    </div>
  );
};
