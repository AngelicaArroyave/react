import PropTypes from 'prop-types'

export const App = ({ title, subtitle, age, hobbie }) => {
    return (
        <>
            <h1> { title } </h1>
            <p> { subtitle } </p>
            <p> { age + 1 } </p>
            <p> { hobbie } </p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    age: PropTypes.number.isRequired
}

App.defaultProps = {
    title: 'No title',
    subtitle: 'No subtitle',
    hobbie: 'Coding'
}