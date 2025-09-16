export default function loading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#1a1a1a'
        }}>
            <div style={{
                width: '50px',
                height: '50px',
                border: '5px solid #333',
                borderTop: '5px solid #ff6b35',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `
            }} />
        </div>
    )
}
