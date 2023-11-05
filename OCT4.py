import pygame 
  
pygame.init() 
  
# CREATING CANVAS 
screen = pygame.display.set_mode((800, 800)) 
  
# TITLE OF CANVAS 
pygame.display.set_caption("ChessBoard") 
running = True
  
while running: 
    for event in pygame.event.get(): 
        if event.type == pygame.QUIT: 
            running = False
    
  
  pygame.display.update() 
