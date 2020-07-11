//object literals

//objects in array
// const blogs = [
//   {title:'why mac and cheese rules', like: 30},
//   {title:'I love marmite..', likes: 50},
//   {title:'10 things to make with marmite', likes: 43}
// ];

// let user = {name: 'crystal',age: 30,email: 'crystal@thenetninja.co.uk',location: 'berlin', blogs: ['why mac and cheese rules','I love marmite..']};

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {title:'why mac and cheese rules', likes: 30},
    {title:'I love marmite..', likes: 50},
    {title:'10 things to make with marmite', likes: 43}
  ],
  login: function(){
    console.log('the user has logged in...');
  },
  logout(){
    console.log('the user has logged out');
  },
  logBlogs(){
    console.log(this);
    // console.log(this.blogs);
    console.log('this user has written the following blogs: ');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
    
  }
};

console.log(user);
console.log(user.name);// dot notation
console.log(user.email);
//
console.log(user['name']);// square bracket notation
console.log(user['email']);

//update properties
user.name = 'chun-li';
console.log(user.name);// dot notation

user['name'] = 'crystal';
console.log(user['name']);// square bracket notation

console.log(typeof user);

//object method
user.login();
user.logBlogs();
user.logout();

//window object...global context  
console.log(this);
