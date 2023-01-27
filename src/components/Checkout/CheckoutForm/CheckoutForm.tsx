import ContactInfo from '@checkout/CheckoutForm/Sections/ContactInfo'
import ShippingInfo from '@checkout/CheckoutForm/Sections/ShippingInfo'
import DeliveryMethod from '@checkout/CheckoutForm/Sections/DeliveryMethod'
import PaymentMethod from '@checkout/CheckoutForm/Sections/PaymentMethod'

const CheckoutForm = () => {
  return (
    <div>
      <div>
        <form>
          <ContactInfo />
          <ShippingInfo />
          <DeliveryMethod />
          <PaymentMethod />
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
