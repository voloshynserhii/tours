export const AboutUs = () => {
    return (
        <section className=" max-w-7xl mx-auto py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent items-center">
            <div className="">
                <h2 className="text-5xl md:text-7xl uppercase mb-6 underline decoration-1 underline-offset-8">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Castellón Cycling Co. is built by riders, for riders.
                    Combining years of experience in hosting and outdoor experiences, we’ve created
                    a cycling destination that balances performance with comfort.
                    Our mission was to create a one-stop Spanish cycling experience that can
                    combine tours, events and training with a 4 star rural hotel experience, with on-site
                    restaurant dining, bike storage and maintenance facilities all in one place.
                    The focus is simple — epic riding from your door with no traﬃc, no transfers and
                    no boring connecting routes. Just perfect Spanish tarmac, quiet undiscovered
                    routes, incredible views and a well-run experience you’ll want to return to.
                </p>
            </div>
            <div className="h-96 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" className="w-full h-full object-cover" alt="Rider" />
            </div>
        </section>
    );
};