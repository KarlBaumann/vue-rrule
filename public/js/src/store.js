import Vue from 'vue'
import Vuex from 'vuex'

export function createStore() {
    Vue.use(Vuex)

    return new Vuex.Store({
        state: {
            repeatIntervalType: null,
            repeatIntervalValue: 1,
            repeatIntervalText: null,
            repeatIntervalPanel: null,
            rruleWeeklyPanel: null,
            rruleWeeklyButtons: null,
            rruleMonthlyPanel: null,
            rruleMonthlyDateMonthDay: null,
            rruleMonthlyDayMonthDayPos: null,
            rruleMonthlyDayMonthDays: null,
            rruleYearlyPanel: null,
            rruleYearlyDateMonth: null,
            rruleYearlyDateMonthDay: null,
            rruleYearlyDayMonthDays: null,
            rruleYearlyDayMonthDayPos: null,
            rruleYearlyDayMonth: null,
            rruleEndAction: null,
            rruleEndSessionsCount: null,
            rruleEndDate: null,
            rruleEndSessionPanel: null,
            rruleEndDatePanel: null,
            rruleResult: null,

            repeatTypes: [
                {
                    "type": "daily",
                    "unit": "day",
                    "label": "Daily"
                },
                {
                    "type": "weekly",
                    "unit": "week",
                    "label": "Weekly"
                },
                {
                    "type": "monthly",
                    "unit": "month",
                    "label": "Monthly"
                },
                {
                    "type": "yearly",
                    "unit": "year",
                    "label": "Yearly"
                },
                {
                    "type": "hourly",
                    "unit": "hour",
                    "label": "Hourly"
                },

            ],
            activeRepeatType: {
                "type": "daily",
                "unit": "day",
                "label": "Daily"
            },
        },
        mutations: {
            setRepeatType(state, repeatType) {
                state.activeRepeatType = repeatType
            },

            setRruleResult(state, rruleResult) {
                state.rruleResult = rruleResult
            },


        },

        getters: {},

        actions: {},

    })

}