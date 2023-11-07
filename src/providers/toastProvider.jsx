import { ToastProvider } from 'react-native-toast-notifications'

const ToasterProvider = (props) => {
  return (
    <ToastProvider>
      {props.children}
    </ToastProvider>
  );
}

export default ToasterProvider