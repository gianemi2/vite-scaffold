import { Button, Card } from 'react-bootstrap'
import { useDarkMode } from '../context/DarkModeContext';
import useLocalStorage from '../hooks/useLocalStorage'

export const HelloCard = () => {
    const { isDark, theme } = useDarkMode();
    const [count, setCount] = useLocalStorage('count', 0);

    const increaseCount = () => setCount(count + 1);

    const resetCount = () => setCount(0);


    return (
        <Card bg={theme} text={isDark ? 'light' : 'dark'}>
            <Card.Header>Hello world!</Card.Header>
            <Card.Body>
                <Card.Text className="d-flex" style={{ gap: '.5rem' }}>
                    <Button onClick={() => increaseCount()}>Increase: {count}</Button>
                    <Button onClick={() => resetCount()} variant="outline-danger" >Reset</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
