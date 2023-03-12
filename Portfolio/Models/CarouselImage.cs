namespace Portfolio.Models;

public class CarouselImage
{
    public string Src { get; private set; }
    public string Alt { get; private set; }

    public CarouselImage(string src, string alt)
    {
        Src = src;
        Alt = alt;
    }
}
