let tasks = [
    {
       id : 1,
       taskName:"Read Book",
       date : "2026-11-12",
       isDone: true
    },
     {
       id : 2,
       taskName:"Write Email",
       date : "2026-11-12",
       isDone: true
    },
     {
       id : 3,
       taskName:"Gym",
       date : "2026-11-12",
       isDone: true
    },
     {
       id : 4,
       taskName:"Study",
       date : "2026-11-12",
       isDone: true
    },
]


function renderTasks() {
    let task = document.getElementById("tasks").innerHTML = tasks.map(function(t){
 return` <div  class="bg-white hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ease-in-out px-5 border-b py-3 flex  justify-between">
                    <div class="flex flex-col gap-2">
                        <span class="text-lg font-medium">${t.taskName}</span>
                        <div class="flex justify-center text-sm items-center gap-2">
                          <span><i class="fa-chisel fa-regular fa-calendar"></i></span>
                          <span>${t.date}</span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-8">
                         <button onclick="deleteTask(${t.id})" class="rounded-full mr-auto cursor-pointer flex justify-center shadow-lg items-center bg-rose-950 w-9 h-9">
                              <i class="fa-solid  text-white text-sm fa-trash"></i>
                         </button>
                         <button  class="rounded-full mr-auto cursor-pointer flex justify-center shadow-lg items-center bg-green-600 w-9 h-9">
                              <i class="fa-solid  text-white text-sm fa-check"></i>
                         </button>
                         <button onclick="editTask(${t.id})" class="rounded-full mr-auto cursor-pointer flex  justify-center shadow-lg items-center bg-indigo-500 w-9 h-9">
                              <i class="fa-solid fa-pen text-sm text-white text-md"></i>
                         </button>
                    </div>
                </div> `;
}).join("")
 

}

    renderTasks(); 


     let popup = document.getElementById("popup");
     let openPopup = document.getElementById("openPopup");
     let cancelBtn = document.getElementById("cancelBtn");
     let saveBtn = document.getElementById("saveBtn");
     let del = document.getElementById("del");
     let title = document.getElementById("title");
     let editingTaskId = null;
     

     openPopup.addEventListener("click", function () {
     popup.classList.remove("hidden");
     });

     cancelBtn.addEventListener("click", function () {
     popup.classList.add("hidden");
        editingTaskId = null;
     });

     saveBtn.addEventListener("click",function(){
      let taskname = document.getElementById("taskName").value;
      let taskDate = document.getElementById("taskDate").value;

         if (editingTaskId !== null) {

        let task = tasks.find(function(t) {
            return t.id === editingTaskId;
        });

        task.taskName = taskname;
        task.date = taskDate;

    } else {

         let newTask = {
          id: Date.now(),
          taskName: taskname,
          date: taskDate,
          isDone: false
        };
          tasks.push(newTask);
      }
      
        popup.classList.add("hidden");
        renderTasks();
     })

     function deleteTask(id) {
      tasks = tasks.filter(function(task) {
         return task.id !== id;
      });
      renderTasks();
   }

   function editTask(id) {
    let task = tasks.find(function(t) {
        return t.id === id;});
    
    editingTaskId = id;
    popup.classList.remove("hidden");
    document.getElementById("taskName").value = task.taskName;
    document.getElementById("taskDate").value = task.date;
    saveBtn.innerText = "Update Task";
    title.innerText = "Update Task";
   }






