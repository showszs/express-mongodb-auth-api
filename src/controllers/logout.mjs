export const logoutHandler = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' })
        }

        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Session destroy failed' })
            }
            res.clearCookie('connect.sid')
            res.status(200).json({ message: 'Logout successful' })
        })
    })
}