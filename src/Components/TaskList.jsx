import React from 'react';
import { FaTrashCan , FaCheck , FaX , FaPlus} from "react-icons/fa6";

export default function TaskList() {
  return (
    <div className='contain'>
      <div className='head1'><strong>What do you have to do?</strong></div>
      
      <br />
      <br />
      פה צריך להיות הרשומות שמייצרים
      <br />
      <br />  
      <div>
      <button><FaTrashCan /> Delete All</button>
      <button><FaCheck /> Done All</button>
      <button> <FaX />  Didn't Do All</button>
      </div>
      <div>
      <form action="">
        <input type="text" name="TaskName" id="TaskName" placeholder='Enter Task name'/>
        <input type="date" name="TaskDate" id="TaskDate" />
        <button><FaPlus /> Add </button>
        </form>
      </div>
    </div>
  )
}
