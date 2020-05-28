/**

 **/

module.exports = (sequelize, Sequelize) => {
    const Alert = sequelize.define("Alert", {
        type: {
            type: Sequelize.STRING
        },
        world: {
            type: Sequelize.INTEGER
        },
        start_time: {
            type: Sequelize.BIGINT
        },
        end_time: {
            type: Sequelize.BIGINT
        },
        running: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });

    return Alert;
};
