import unionWith from 'lodash/unionWith';

export const questions = (state = [],{type,question,questions})=>{
    /**
     * Question Equality returns true if two questions are equal, based on a weak check of their question_id property
     * @param a
     * The first question
     * @param b
     * The second question
     * @returns {boolean}
     * Whether the questions are equal
     */
    const questionEquality = (a = {},b = {})=>{
        return a.question_id == b.question_id
    };

    if (type === `FETCHED_QUESTION`) {
        state = unionWith([question],state,questionEquality);
    }

    if (type === `FETCHED_QUESTIONS`) {
        state = unionWith(state,questions,questionEquality);
    }
    return state;
};
