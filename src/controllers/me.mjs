export const getMeHandler = (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ message: 'User is authenticated' })
    } else {
        res.status(401).json({ message: 'Not authenticated' })
    }
}