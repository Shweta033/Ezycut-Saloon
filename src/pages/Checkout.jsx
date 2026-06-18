import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const serviceOptions = [
  { title: "Haircut & Styling", price: 299, duration: "45 mins" },
  { title: "Beard Grooming", price: 149, duration: "25 mins" },
  { title: "Facial & Cleanup", price: 499, duration: "60 mins" },
  { title: "Hair Spa", price: 799, duration: "75 mins" },
  { title: "Hair Coloring", price: 999, duration: "90 mins" },
  { title: "Makeup", price: 1499, duration: "120 mins" },
];

const salonOptions = [
  "Royal Fade Lounge",
  "Urban Trim Studio",
  "Golden Mirror Salon",
  "Craft & Comb",
  "The Gentleman's Room",
  "Cut Culture House",
];

const slotOptions = [
  "Today, 4:30 PM",
  "Today, 6:00 PM",
  "Tomorrow, 11:00 AM",
  "Tomorrow, 1:30 PM",
];

function Checkout() {
  const [searchParams] = useSearchParams();
  const initialService =
    searchParams.get("service") || serviceOptions[0].title;
  const initialSalon = searchParams.get("salon") || salonOptions[0];

  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedSalon, setSelectedSalon] = useState(initialSalon);
  const [selectedSlot, setSelectedSlot] = useState(slotOptions[0]);

  const activeService =
    serviceOptions.find((service) => service.title === selectedService) ||
    serviceOptions[0];
  const convenienceFee = 29;
  const totalAmount = activeService.price + convenienceFee;

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="checkout-copy">
          <p className="checkout-eyebrow">Secure booking checkout</p>
          <h1>Review your appointment and move to Razorpay payment.</h1>
          <p className="checkout-subcopy">
            Confirm your service, salon, and slot in one place. When Razorpay
            is connected, this button will open the secure payment sheet.
          </p>
        </div>

        <div className="checkout-trust-row">
          <span>Instant booking confirmation</span>
          <span>Secure online payment</span>
          <span>Easy reschedule support</span>
        </div>
      </section>

      <section className="checkout-layout">
        <section className="checkout-form-card">
          <div className="checkout-section-head">
            <p>Booking details</p>
            <h2>Customize the final appointment before payment.</h2>
          </div>

          <div className="checkout-form-grid">
            <label>
              <span>Select service</span>
              <select
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
              >
                {serviceOptions.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Select salon</span>
              <select
                value={selectedSalon}
                onChange={(event) => setSelectedSalon(event.target.value)}
              >
                {salonOptions.map((salon) => (
                  <option key={salon} value={salon}>
                    {salon}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Preferred slot</span>
              <select
                value={selectedSlot}
                onChange={(event) => setSelectedSlot(event.target.value)}
              >
                {slotOptions.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Phone number</span>
              <input placeholder="+91 98765 43210" type="tel" />
            </label>
          </div>

          <label className="checkout-note-field">
            <span>Special request</span>
            <textarea
              placeholder="Any styling note, product preference, or haircut instruction..."
              rows="5"
            />
          </label>

          <div className="checkout-payment-preview">
            <div className="checkout-payment-preview-head">
              <p>Payment methods preview</p>
              <h3>Razorpay can show cards, UPI, wallets, and net banking here.</h3>
            </div>

            <div className="checkout-methods">
              <span>UPI</span>
              <span>Credit Card</span>
              <span>Debit Card</span>
              <span>Wallets</span>
              <span>Net Banking</span>
            </div>
          </div>
        </section>

        <aside className="checkout-summary-card">
          <div className="checkout-summary-top">
            <p className="checkout-summary-label">Appointment summary</p>
            <h2>{selectedService}</h2>
            <span>{activeService.duration}</span>
          </div>

          <div className="checkout-summary-list">
            <div>
              <p>Salon</p>
              <strong>{selectedSalon}</strong>
            </div>
            <div>
              <p>Slot</p>
              <strong>{selectedSlot}</strong>
            </div>
            <div>
              <p>Booking amount</p>
              <strong>Rs {activeService.price}</strong>
            </div>
            <div>
              <p>Convenience fee</p>
              <strong>Rs {convenienceFee}</strong>
            </div>
          </div>

          <div className="checkout-total-row">
            <p>Total payable</p>
            <strong>Rs {totalAmount}</strong>
          </div>

          <button className="checkout-pay-button" type="button">
            Pay with Razorpay
          </button>

          <p className="checkout-disclaimer">
            This is the payment design layer. Live Razorpay checkout will open
            here once API keys and backend order creation are connected.
          </p>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
