import ChatBot from 'react-simple-chatbot';

export default function Chat() {
    return(
        <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '2',
          },
        ]}
        floating={true}
        bubbleOptionStyle={true}
      />
    )
}