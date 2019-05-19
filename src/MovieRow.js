import React from 'react'


class MovieRow extends React.Component {
    viewMovie() {
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        var color = "#FFFFFF"
        if (this.props.color === 0) {
            color = "#FFFFFF"
        } else {
            color = "#E0E0E0"
        }

        return <table style={{ width: "100%", backgroundColor: color }} key={this.props.movie.id} >
            <tbody >
                <tr>
                    <td style={{ width: "120px" }}>
                        <img alt="poster" width="120px" src={this.props.movie.poster_src} />
                    </td>
                    <td>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
                    </td>
                </tr>
            </tbody>
        </table>
    }
}

export default MovieRow