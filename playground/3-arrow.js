const tasks ={
    tasks:[
        {
            task :"grocery shopping",
            completed :true
        },{
            task :"clean yard",
            completed :false
        },{
            task :"film course",
            completed :false
        }
    ],
    getTAsks(){
        return this.tasks.filter((task)=>
         task.completed===false
       )
      
    }
}


console.log(tasks.getTAsks())