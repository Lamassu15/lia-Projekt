import BookingForm from "../components/BookingForm";
import FormBtn from "../components/FormBtn";
import { BOOKING_PARAGRAPH } from "../constans";

function Contact() {
  return (
    <section className="container mx-auto px-8">
      <h1
        id="#Services"
        className="text-start heading-1 uppercase leading-10 tracking-widest mt-20 mb-20"
      >
        Booking
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-3/4 text-center">
          <h2 className="heading-2 mb-5">Book Your Appointment</h2>
          <p className="paragraph">{BOOKING_PARAGRAPH}</p>
        </div>
        <div className="w-full">
          <form action="" className="flex flex-col gap-4">
            <BookingForm></BookingForm>
            <FormBtn></FormBtn>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
