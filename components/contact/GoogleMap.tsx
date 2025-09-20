export default function GoogleMap() {
  return (
    <section className="w-full h-[450px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.845433667022!2d90.39134931536388!3d23.750885994646728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b2e2e5c5d7%3A0x6a2f9ad5a8a2d8a2!2sDhaka!5e0!3m2!1sen!2sbd!4v1694683181245!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
