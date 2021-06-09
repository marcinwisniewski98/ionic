import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            tasks: [
                { 
                    id: "1", 
                    image: "https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_960_720.png",
                    title: "Client X meeting", 
                    deadline: "2021-06-20 22:10",
                    description: "Lorem ipsum"
                },
                { 
                    id: "2", 
                    image: "https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_960_720.png",
                    title: "Client Y meeting", 
                    deadline: "2021-06-30 22:10",
                    description: "Lorem ipsum sincit"
                },
                { 
                    id: "3", 
                    image: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_960_720.png",
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
                image: taskData.imageUrl,
                description: taskData.description
            };

            state.tasks.unshift(newTask);
        }
    },
    actions: {
        addTask(context, taskData) {
            context.commit('addTask', taskData);
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