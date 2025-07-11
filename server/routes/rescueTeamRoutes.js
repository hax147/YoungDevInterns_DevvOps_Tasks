import express from 'express';
import { registerRescueTeam, getAllRescueTeams, getRescueTeamById } from '../controllers/rescueTeamController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/register',
    upload.fields([
        { name: 'certificate', maxCount: 1 },
        { name: 'profilePicture', maxCount: 1 }
    ]),
    registerRescueTeam
);
router.get('/', getAllRescueTeams);
router.get('/:id', getRescueTeamById);

export default router;