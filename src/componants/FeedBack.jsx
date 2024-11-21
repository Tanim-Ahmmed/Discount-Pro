import { toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FeedBack = () => {
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    

    toast.success("Thanks for share your feedback" , {
        position: "top-center",
        autoClose: 3000, });
  };
  return (
    <div className="feedback-section mt-12">
      <h2 className="text-2xl font-semibold py-6"> Feedback</h2>
      <p className="mb-4 text-gray-600">Your feedback helps us improve!</p>
      <form onSubmit={handleSubmitFeedback} className="space-y-4">
        <textarea
          name="feedback"
          rows="4"
          placeholder="Write your feedback here..."
          className="w-full p-3 border rounded-lg shadow-sm"
          required
        ></textarea>
        <div className="w-full"> 
        <a
          type="submit"
          href="#"
          className=" bg-[#124e66] text-white p-3 rounded-lg transition"
        >
          Submit Feedback
        </a>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
