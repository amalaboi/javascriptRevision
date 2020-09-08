// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {

    constructor(room,username){

      this.room = room;
      this.username = username;
      this.chats = db.collection('chats');
      this.unsub;

    }//end of constructor

    async addChat(message){
      // format a chat object
      const now = new Date();
      const chat = {
        message: message,
        username: this.username,
        room: this.room,
        created_at: firebase.firestore.Timestamp.fromDate(now)
      };
      // save the chat document
      const response = await this.chats.add(chat);
      return response;

    }// end of addChat()

    getChats(callback){

      this.unsub = this.chats.where('room','==', this.room)
      .orderBy('created_at')
      .onSnapshot((snapshot)=>{
        snapshot.docChanges().forEach((change)=>{

              if(change.type === 'added'){
                // update the ui
                callback(change.doc.data());

              }// end of if statement...

        })//end forEach()
      });// end of onSnapshot()
    }// end of getChat

    updateName(username){
        this.username = username; 
        localStorage.setItem('username',username);
    }// end of updateName()

    updateRoom(room){
      this.room = room;
      console.log('room updated');
      if(this.unsub){
        this.unsub(); 
      }
    }// end of updateRoom()

}// end of class


// create a chatroom reference


// const chatroom = new Chatroom('gaming','akuma');
// console.log(chatroom);
// chatroom.getChats((data)=>{
//   console.log(data);
// });



// chatroom.addChat('prepare for your doom roomies!!!')
//     .then(()=>{
//       console.log('chat added');
//     }).catch((err)=>{
//       console.log(err);
//     });



// setTimeout(()=>{
//   chatroom.updateRoom('gaming');
//   chatroom.updateName('yoshi');
//   chatroom.getChats((data)=>{
//     console.log(data);
//   });
//   chatroom.addChat('hello gamers!!!');
// }, 3000);