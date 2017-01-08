import Messages from './Collections/Messages';
import Message from './Models/messageModel';
import Instagram from './Collections/InstagramCollection';


export default {
  messages: new Messages(),
  message: new Message(),
  instagram: new Instagram()
};
