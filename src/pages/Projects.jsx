const Projects = () => {
    return (
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Projects</h2>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">Short Movie Script Generator</h3>
            <p className="text-gray-600">Uses generative AI to create movie scripts from prompts or themes.</p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">Ayurveda Leaf Identification</h3>
            <p className="text-gray-600">AI-powered tool to identify medicinal leaves using image recognition.</p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">Ayurveda Chatbot</h3>
            <p className="text-gray-600">Chatbot providing information about Ayurvedic remedies and herbs.</p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">Text Summarization with LLM</h3>
            <p className="text-gray-600">Summarizes long documents and articles using large language models.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  