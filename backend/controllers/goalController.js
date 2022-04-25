const getGoals = (req, res) => {
    res.status(200).json('get all')
}

const setGoal = (req, res) => {
    res.status(200).json('create')
}

const updateGoal = (req, res) => {
    res.status(200).json(`update ${req.params.id}`)
}

const deleteGoal = (req, res) => {
    res.status(200).json(`delete ${req.params.id}`)
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}