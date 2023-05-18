function Main({ children }) {
    return (
        <>
        <div className='main-container'>
          { children }
        </div>

        <style jsx>{`
            .main-container {
                height: auto;
            min-height: 80vh;
            padding: 50px;
            }
        `}</style>
        </>
    );
}

export { Main }