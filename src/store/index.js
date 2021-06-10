import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            tasks: [
                { 
                    id: "1", 
                    title: "Client X meeting", 
                    deadline: "2021-06-20 22:10",
                    description: "Lorem ipsum"
                },
                { 
                    id: "2", 
                    title: "Client Y meeting", 
                    deadline: "2021-06-30 22:10",
                    description: "Lorem ipsum sincit"
                },
                { 
                    id: "3", 
                    title: "Mail to Z", 
                    deadline: "2021-06-20 22:20",
                    description: "Lorem ipsum"
                }
                
            ],
        };
    },
    mutations: {
        addTask(state, taskData) {
            const newTask = {
                id: new Date().toISOString(),
                title: taskData.title,
                deadline: taskData.deadline,
                description: taskData.description
            };

            state.tasks.unshift(newTask);
        },
        updateTask(state, taskData){
            var prevTaskData = this.getters.task(taskData.id)
            var index = state.tasks.indexOf(prevTaskData);
            state.tasks[index] = taskData;
        },
        removeTask(state, taskData) {
            var index = state.tasks.indexOf(taskData);
            state.tasks.splice(index, 1);
        }
    },
    actions: {
        addTask(context, taskData) {
            context.commit('addTask', taskData);
        },
        updateTask(context, taskData) {
            context.commit('updateTask', taskData)
        },
        removeTask(context, taskData){
            context.commit('removeTask', taskData);
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        },
        task(state) {
            return (taskId) => {
                return state.tasks.find(task => task.id === taskId);
            };
        }
    }
});

export default store;