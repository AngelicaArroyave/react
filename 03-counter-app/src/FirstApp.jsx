import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, age, hobbie }) => {
    return (
        <>
            <h1> { title } </h1>
            <h2> { subtitle } </h2>
            <h2> { subtitle } </h2>
            <p> { age + 1 } </p>
            <p data-testid="test-hobbie"> { hobbie } </p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    age: PropTypes.number.isRequired
}

// FirstApp.defaultProps = {
//     title: 'No title',
//     subtitle: 'No subtitle',
//     hobbie: 'Coding'
// }