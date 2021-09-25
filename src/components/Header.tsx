
interface selectedProps {
  selectedGenre: { title: string }
}

export function Header({selectedGenre}: selectedProps) {
  
  return(
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )

}