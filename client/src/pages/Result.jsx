import React, { useContext, useState, useRef } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const canvasRef = useRef(null);

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please describe what you want to generate");
      return;
    }

    setError("");
    setLoading(true);
    setShowDownloadOptions(false);

    try {
      const generatedImage = await generateImage(input);
      if (generatedImage) {
        setIsImgLoading(true);
        setImage(generatedImage);
      }
    } catch (err) {
      setError("Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAnother = () => {
    setInput("");
    setIsImgLoading(false);
    setShowDownloadOptions(false);
  };

  const handleDownload = (format) => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = `ai-generated-image.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadOptions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-t from-gray-50/40 to-teal-50/10 rounded-2xl  py-12 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            AI Image Generator
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your imagination into stunning visuals with our AI-powered generator
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Image Preview Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {loading ? (
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl w-full aspect-square flex flex-col items-center justify-center p-8 shadow-lg">
                  <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Generating your image...</h3>
                  <p className="text-gray-600 text-center">
                    Our AI is creating your masterpiece. This usually takes 10-20 seconds.
                  </p>
                  <div className="mt-6 w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src={image}
                    alt="Generated"
                    className="w-full rounded-2xl shadow-xl border-8 border-white object-cover aspect-square"
                    onLoad={() => setIsImgLoading(false)}
                  />

                  {!isImgLoading && !loading && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="text-white">
                          <p className="font-medium text-lg">Prompt:</p>
                          <p className="text-sm opacity-90">{input || "Sample prompt"}</p>
                        </div>
                      </div>

                      <div className="absolute -top-4 -right-4 flex gap-2">
                        <button
                          onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                          className="bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition-colors"
                          aria-label="Download options"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>

                        <button className="bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>

                      {showDownloadOptions && (
                        <div className="absolute -right-4 top-14 bg-white rounded-xl shadow-2xl p-4 w-60 z-10">
                          <h3 className="font-semibold text-gray-800 mb-3">Download Options</h3>
                          <div className="space-y-2">
                            <button
                              onClick={() => handleDownload('png')}
                              className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                              <span>PNG (High Quality)</span>
                            </button>
                            <button
                              onClick={() => handleDownload('jpg')}
                              className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                              <span>JPG (Standard)</span>
                            </button>
                            <button
                              onClick={() => handleDownload('webp')}
                              className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                              <span>WebP (Smaller Size)</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {error && (
                <div className="mt-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg max-w-md w-full">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Input Section */}
          <div className="w-full lg:w-1/2 max-w-xl">
            {!isImgLoading && !loading ? (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Image</h2>
                <p className="text-gray-600 mb-6">Describe what you want to generate</p>

                <div className="mb-6">
                  <textarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="A futuristic cityscape at sunset with flying cars, neon lights, and towering skyscrapers..."
                    className="w-full h-40 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-gray-800"
                  />
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onSubmitHandler}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Generate Image
                  </button>

                  <button
                    onClick={handleGenerateAnother}
                    className="flex-1 bg-white border-2 border-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-gray-800 mb-3">Prompt Ideas</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1.5 rounded-full cursor-pointer hover:bg-indigo-200" onClick={() => setInput("A cyberpunk city street at night with neon signs and rain")}>Cyberpunk City</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1.5 rounded-full cursor-pointer hover:bg-indigo-200" onClick={() => setInput("A serene mountain landscape with a crystal clear lake at sunrise")}>Mountain Lake</span>
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1.5 rounded-full cursor-pointer hover:bg-indigo-200" onClick={() => setInput("A futuristic spaceship interior with holographic displays")}>Spaceship Interior</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Image is Ready!</h2>
                <p className="text-gray-600 mb-8">Download in your preferred format or create another image</p>

                <div className="mb-8">
                  <button
                    onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Image
                  </button>

                  {showDownloadOptions && (
                    <div className="mt-4 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-3">Select Format</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => handleDownload('png')}
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                          <span>PNG</span>
                        </button>
                        <button
                          onClick={() => handleDownload('jpg')}
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                          <span>JPG</span>
                        </button>
                        <button
                          onClick={() => handleDownload('webp')}
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                          <span>WebP</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleGenerateAnother}
                  className="w-full bg-white border-2 border-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate Another
                </button>

                <div className="mt-8 bg-indigo-50 rounded-xl p-4">
                  <h3 className="font-medium text-indigo-800 mb-2">Pro Tip</h3>
                  <p className="text-sm text-indigo-700">
                    For better results, include details like art style, colors, and composition in your description.
                    Example: "Watercolor painting of a forest with autumn colors and a small cabin".
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="fixed bottom-40 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </motion.div>
  );
};

export default Result;