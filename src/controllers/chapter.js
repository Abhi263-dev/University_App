const db = require('../db/index')
const Chapter= db.chapter;

// Endpoint to add a chapter
const createChapter = async (req, res) => {
    try {
        const newChapter = await Chapter.create(req.body);
    
        res.status(201).json(newChapter);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

//Endpoint to get a chapter
const getChapter= async (req,res)=> {
    const chapterId = req.params.id; // Get the chapter ID from request parameters
    try {
      // Find the chapter in the database by its ID
      const chapter = await Chapter.findByPk(chapterId);
      
      if (!chapter) {
        return res.status(404).json({ error: "Chapter not found" });
      }
  
      res.status(200).json(chapter); // Send the chapter as JSON response
    } catch (error) {
      console.error("Error fetching chapter:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createChapter,
    getChapter,
};