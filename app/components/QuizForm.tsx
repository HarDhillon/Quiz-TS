'use client'
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { categoryOptions } from "../config/quizOptions";


type Difficulty = 'any' | 'easy' | 'medium' | 'hard';
type QuestionType = 'multiple' | 'boolean'

const initialFormState = {
    numberOfQuestions: '',
    category: '',
    difficulty: 'any' as Difficulty,
    questionType: 'multiple' as QuestionType
}

export default function QuizForm() {

    const [formOptions, setFormOptions] = useState(initialFormState)
    const [step, setStep] = useState('1')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        setFormOptions((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleNextForm = () => {
        if (!isValidStep()) {
            alert('Please enter a valid number of questions between 1 and 50.');
            return
        }
        const newStep = parseInt(step) + 1
        setStep(newStep.toString())
    }

    const handleFormSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        // Handle form submit here
    }

    // Form validation
    const isValidStep = () => {
        if (step === '1') {
            return formOptions.numberOfQuestions !== null && Number(formOptions.numberOfQuestions) > 0 && Number(formOptions.numberOfQuestions) <= 50;
        }
        return true; // Default to valid if no specific validation is needed
    };

    const formSteps: { [key: string]: JSX.Element} = {
        '1':
            <div>
                <label className="block mb-2" htmlFor="numberOfQuestions">Number of questions</label>
                <input onChange={e => handleChange(e)} value={formOptions.numberOfQuestions} name="numberOfQuestions" type="text" maxLength={2} required className="px-2 py-2 text-black min-w-[200px]" aria-describedby="number-desc" id="numberOfQuestions"></input>
                <p className="text-sm mt-3" id="number-desc">Enter a number between 1-50</p>
            </div>,
        '2':
            <div>
                <label className="block mb-2" htmlFor="numberOfQuestions">Question Category</label>
                <select className="text-black p-2" name="category" id="category" value={formOptions.category} onChange={e => handleChange(e)}>
                    {categoryOptions.map(({ value, label }) => {
                        return <option key={value} value={value}>{ label }</option>
                    })}
                </select>
            </div>,
        '3':
            <div>
                <label className="block mb-2">Question Category</label>
                <label>
                    <input className="mr-1" name="difficulty" onChange={e => handleChange(e)} checked={formOptions.difficulty === 'any'} type="radio" value="any"></input>
                    Any
                </label>
                <label className="ml-3">
                    <input className="mr-1" name="difficulty" onChange={e => handleChange(e)} checked={formOptions.difficulty === 'easy'} type="radio" value="easy"></input>
                    Easy
                </label>
                <label className="ml-3">
                    <input className="mr-1" name="difficulty" onChange={e => handleChange(e)} checked={formOptions.difficulty === 'medium'} type="radio" value="medium"></input>
                    Medium
                </label>
                <label className="ml-3">
                    <input className="mr-1" name="difficulty" onChange={e => handleChange(e)} checked={formOptions.difficulty === 'hard'} type="radio" value="hard"></input>
                    Hard
                </label>
            </div>,
        '4':
            <div>
                <label className="block mb-2">Question Type</label>
                <label>
                    <input  className="mr-1" name="questionType" onChange={e => handleChange(e)} checked={formOptions.questionType === 'multiple'} type="radio" value="multiple"></input>
                    Multiple Choice
                </label>
                <label className="ml-3">
                    <input  className="mr-1" name="questionType" onChange={e => handleChange(e)} checked={formOptions.questionType === 'boolean'} type="radio" value="boolean"></input>
                    True or False
                </label>
            </div>
    }


    return (
        <form onKeyDown={(e)=> {if(e.key === 'Enter' && step !=='4') handleNextForm()}}>
            <fieldset className="border border-white p-5 min-w-[320px] sm:min-w-[550px]">
                <legend className="mb-6 ml-2">Quiz options</legend>
                <div className="flex">
               {formSteps[step]}
            
                <div className="flex items-center ml-auto">
                    { step !== '4' ? 
                    <button onClick={handleNextForm} type="button" className="px-4 py-2 bg-green rounded hover:bg-green-dark transition-all">
                        <FaArrowRightLong className="text-2xl"></FaArrowRightLong>     
                    </button> :
                    
                    <button onClick={handleFormSubmit} type="button" className="px-4 py-2 bg-green rounded hover:bg-green-dark transition-all">Generate Quiz!</button>

                    }
                </div>
                </div>
            </fieldset>
        </form>
    )
}