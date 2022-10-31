import axios from "axios";

export function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise.then((response) => {
        return response.data
    })
}

export function createTasks(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5355323,
        title: title
    })
    return promise.then((response) => {
        return response.data
    })
}

export function updateTask(id) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: id,
        title: "title"
    })
    return promise.then((response) => {
        return response.data
    })
}

export function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks`, {
        taskId: id
    })
    return promise.then((response) => {
        return response.data
    })
}

