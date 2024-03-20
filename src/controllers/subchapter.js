const db = require('../db/index')
const subChapter= db.subchapter;

// Endpoint to add a subchapter
const addsub = async (req, res) => {
    try {
        // Extract data from request body
        const { chapterId, title, details } = req.body;

        // Validate the request body
        if (!chapterId || !title || !details || !Array.isArray(details)) {
            return res.status(400).json({ error: 'Invalid request body' });
        }

        // Create the subchapter in the database
        const subchapter = await subChapter.create({
            chapterId,
            title,
            details
        });

        // If creation is successful, send a success response
        res.status(201).json(subchapter);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error creating subchapter:', error);
        res.status(500).json({ error: 'An error occurred while creating the subchapter' });
    }
};

//Endpoint to get a chapter
// const getChapter= async (req,res)=> {
//     const chapterId = req.params.id; // Get the chapter ID from request parameters
//     try {
//       // Find the chapter in the database by its ID
//       const chapter = await Chapter.findByPk(chapterId);
      
//       if (!chapter) {
//         return res.status(404).json({ error: "Chapter not found" });
//       }
  
//       res.status(200).json(chapter); // Send the chapter as JSON response
//     } catch (error) {
//       console.error("Error fetching chapter:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
// }

module.exports = {
    addsub,
};