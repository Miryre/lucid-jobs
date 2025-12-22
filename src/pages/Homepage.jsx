const Homepage = () => {
    return(
        <div className="min-h-screen bg-midnight-water flex items-center justify-center">
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-foam mb-4'>
                    Lucid Jobs
                </h1>
                <p className='text-2xl text-clear-water mb-8'>
                    See jobs clearly
                </p>
                <div className='flex gap-4 justify-center'>
                    <button className='bg-clear-water text-deep-ocean px-6 py-3 rounded-lg font-semibold hover:bg-shallow-lagoon transition-colors'>
                        Find Jobs
                    </button>
                    <button className='bg-deepgray text-foam px-6 py-3 rounded-lg font-semibold hover:bg-slate transition-colors border border-slate'>
                        Post Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;