let user = [
    {
        id:1,
        username:'lebaongoc',
        password:1234,
    },
    {
        id:2,
        username:'lebaongoc2',
        password:12345,
    },
    {
        id:3,
        username:'lebaongoc3',
        password:12346,
    },
    {
        id:4,
        username:'lebaongoc4',
        password:12347,
    },


]
   
    if(!localStorage.getItem('user')){
        localStorage.setItem('user',JSON.stringify(user));
    }

