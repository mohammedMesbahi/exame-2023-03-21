var express = require('express');

/* controller for creating a task */

module.exports.task_create_post =  (req, res, next) => {
    if (req.session.tasks == undefined) {
        req.session.tasks = [];
        req.session.tasksCurrentId = 1;
    }
    req.session.tasks.push({
        
        id: req.session.tasksCurrentId,
        title: req.body.title
    });
    req.session.tasksCurrentId++;
    res.send(req.session.tasks[req.session.tasks.length - 1]);
}
module.exports.tasks_get = (req, res, next) => {
    if (req.session.tasks == undefined) {
        req.session.tasks = [];
        req.session.tasksCurrentId = 1;

    }
    res.send(req.session.tasks);
}
module.exports.task_delete = (req, res, next) => {
    if (req.session.tasks == undefined) {
        req.session.tasks = [];
        req.session.tasksCurrentId = 1;

    }
    req.session.tasks.splice(req.params.id, 1);
    res.send(req.session.tasks);
}
module.exports.task_moveUp_post = (req, res, next) => {
    if (req.session.tasks == undefined) {
        req.session.tasks = [];
        req.session.tasksCurrentId = 1;
    }else if (req.session.tasks.length) {
        let taskPostion = req.session.tasks.findIndex(task => task.id == req.params.id)
        if (taskPostion > 0) {
            let temp = req.session.tasks[taskPostion];
            req.session.tasks[taskPostion] = req.session.tasks[taskPostion - 1];
            req.session.tasks[taskPostion - 1] = temp;
        }

    }
    res.send(req.session.tasks);
}
module.exports.task_moveDown_post = (req, res, next) => {
    if (req.session.tasks == undefined) {
        req.session.tasks = [];
        req.session.tasksCurrentId = 1;
    }else if (req.session.tasks.length) {
        let taskPostion = req.session.tasks.findIndex(task => task.id == req.params.id)
        if (taskPostion < req.session.tasks.length - 1) {
            let temp = req.session.tasks[taskPostion];
            req.session.tasks[taskPostion] = req.session.tasks[taskPostion + 1];
            req.session.tasks[taskPostion + 1] = temp;
        }
    }
}


