import { SERVICES } from "../constans/index";

function BookingForm() {
  return (
    <>
      {/* Namn och Efternamn bredvid varandra på större skärmar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
            placeholder="Elon"
            required
          />
        </div>
        <div>
          <label htmlFor="surname" className="block text-sm font-medium">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
            placeholder="Musk"
            required
          />
        </div>
      </div>

      {/* E-post */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
          placeholder="elonmusk@email.com"
          required
        />
      </div>

      {/* Tjänster (Dropdown) */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium">
          Services
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
          required
        >
          <option value="">Choose a service</option>
          {SERVICES.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name} - {service.price} ({service.duration})
            </option>
          ))}
        </select>
      </div>

      {/* Datum och Tid bredvid varandra på större skärmar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
            required
          />
        </div>
      </div>

      {/* Meddelande */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Massage
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
    </>
  );
}

export default BookingForm;
