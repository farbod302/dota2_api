const all = require("./counter_picker.json")

const counter_pick = (heros) => {
    let list = all.data

    list.forEach(each_hero => {
        each_hero.good_against = each_hero.good_against.filter(function (item, pos) {
            return each_hero.good_against.indexOf(item) == pos;
        })
        each_hero.bad_against = each_hero.bad_against.filter(function (item, pos) {
            return each_hero.bad_against.indexOf(item) == pos;
        })
    })
    let all_good = [],
        all_bad = [],
        score = []
    heros.forEach(each_hero => {
        let selected_hero = list.find(each_list_hero => each_list_hero.name == each_hero)
        all_good = all_good.concat(selected_hero.good_against)
        all_bad = all_bad.concat(selected_hero.bad_against)
    })


    all_good.forEach(each_good => {
        let selected_score_index = score.findIndex(each_score => each_score.name === each_good)
        if (selected_score_index == -1) {
            score.push({
                name: each_good,
                score: -1
            })
        }
        else {
            score[selected_score_index].score--
        }
    })

    all_bad.forEach(each_bad => {

        let selected_score_index = score.findIndex(each_score => each_score.name === each_bad)
        if (selected_score_index == -1) {
            score.push({
                name: each_bad,
                score: 1
            })
        }
        else {
            score[selected_score_index].score++
        }

    })
    score = score.filter(each => !heros.includes(each.name))
    score = score.sort((a, b) => b.score - a.score)
    console.log(score);
    return score

}


module.exports = { counter_pick }