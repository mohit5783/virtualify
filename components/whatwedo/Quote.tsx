interface Quote {
    text: string;
    author: string;
    position: string;
}

interface PropType {
    quote: Quote;
}

const QuoteComponent = (props: PropType) => {
    const { quote } = props;
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md my-8">
                <blockquote className="text-center">
                    <p className="text-xl font-serif italic text-gray-800 mb-4">"{quote.text}"</p>
                    <footer className="mt-4">
                        <p className="text-lg font-semibold text-gray-700">{quote.author}</p>
                        <p className="text-sm text-gray-500">{quote.position}</p>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};

export default QuoteComponent;